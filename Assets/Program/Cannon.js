#pragma strict

private var prefab : GameObject;
public var ball : GameObject;
public var syuriken : GameObject;
public var power : float;
private var center : Vector3;
public var image : Image;
private var count : int;
private var hour : int;


function Start () {
    // 画面中央の座標を取得。
    center = Vector3(Screen.width/2, Screen.height/2, 10);
    count=0;
}

function Update () {
    hour = System.DateTime.Now.Hour;
    if(6 <= hour && hour <18) prefab=ball;
    else prefab =syuriken;
    if(Input.GetMouseButtonDown(0)){
        count++;
        image.transform.localScale = Vector3 ((count%6)*20, 15, 0);

        if(count%6==0){
            var bullet = LoadBullet();
            var ray : Ray = Camera.main.ScreenPointToRay(center);
            var dir : Vector3 = ray.direction.normalized;
            bullet.GetComponent.<Rigidbody>().velocity = dir * power;
        }
    }

}

function LoadBullet() : GameObject{
    var bullet = GameObject.Instantiate(prefab)as GameObject;
    bullet.transform.parent = transform;
    bullet.transform.localPosition = Vector3.zero;
    return bullet;
}