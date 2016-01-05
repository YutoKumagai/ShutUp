#pragma strict

private var prefab : GameObject;
public var ball : GameObject;
public var syuriken : GameObject;
public var power : float;
private var center : Vector3;
public var image : UnityEngine.UI.Image;
private var powerGauge : float;
private var hour : int;

private var vol : float;

private var csScript : GetVol;

//定数-----------------------------------------------------------
private var inputVolumeMin : float = 0.1;
private var powerGaugeMax : int = 20;
private var powerGaugePerOneShoot : int = 4;

function Start () {
    // 画面中央の座標を取得。
    center = Vector3(Screen.width/2,Screen.height/2, 10);
    powerGauge=0;
}

function Awake(){
    csScript = this.GetComponent("GetVol");
}

function Update () {
    hour = System.DateTime.Now.Hour;
    if(6 <= hour && hour <18) prefab=ball;
    else prefab =syuriken;

    vol = csScript.GetAveragedVolume();
    image.transform.localScale = Vector3 ((powerGauge)*5, 15, 0);
    
    //一定の音量を検出した時、その音量の分パワーゲージを貯める
    if(vol > inputVolumeMin){ 
        if(powerGauge < powerGaugeMax){
        	powerGauge = powerGauge + vol;
        }else{
        	powerGauge = powerGaugeMax;
        }
    }

    if(powerGauge >= powerGaugePerOneShoot && Input.GetMouseButtonDown(0)){
        var bullet = LoadBullet();
        powerGauge = powerGauge - powerGaugePerOneShoot;
        var ray : Ray = Camera.main.ScreenPointToRay(center);
        var dir : Vector3 =ray.direction.normalized;
        bullet.GetComponent.<Rigidbody>().velocity = dir * power;
    }

}

    function LoadBullet() : GameObject{
        var bullet = GameObject.Instantiate(prefab)as GameObject;
        bullet.transform.parent = transform;
        bullet.transform.localPosition = Vector3.zero;
        return bullet;
    }