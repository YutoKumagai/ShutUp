#pragma strict

public var hiyoko : GameObject;
public var zombie : GameObject;
public var obj : GameObject;
public var interval : float=3;
public var time : float;
public var sumtime : float = 0;
public var hour : int; 
public var x : int;
public var y : float;
public var r : float;
function Start () {

}

function Update () {

    time+=Time.deltaTime;
    if(sumtime==10)  interval=2;
    if(sumtime==20)  interval=1;
    
    hour = System.DateTime.Now.Hour;
    if(6 <= hour && hour <18) obj =hiyoko;
    else obj =zombie;
    if(time >= interval){
        sumtime = sumtime + time;
        time=0;
        r=70;
        x=Random.Range(0 , 180);
        var obj1 : GameObject = Instantiate(obj)as GameObject;
        obj1.transform.localPosition = Vector3(
            r*Mathf.Cos(Mathf.PI/180 * x),
            5,
            r*Mathf.Sin(Mathf.PI/180 * x)
            );

        var obj2 : GameObject = Instantiate(obj)as GameObject;
        obj2.transform.localPosition = Vector3(
            r*Mathf.Cos(Mathf.PI/180 * x),
            5,
            r*Mathf.Sin(Mathf.PI/180 * x)-7
            );
        var obj3 : GameObject = Instantiate(obj)as GameObject;
        obj3.transform.localPosition = Vector3(
            r*Mathf.Cos(Mathf.PI/180 * x)-7,
            5,
            r*Mathf.Sin(Mathf.PI/180 * x)
            );
        var obj4 : GameObject = Instantiate(obj)as GameObject;
        obj4.transform.localPosition = Vector3(
            r*Mathf.Cos(Mathf.PI/180 * x)-7,
            5,
            r*Mathf.Sin(Mathf.PI/180 * x)-7
            );
    }
}
