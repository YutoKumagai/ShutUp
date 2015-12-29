#pragma strict

public var sceneName : String;

function OnTriggerEnter (col : Collider) {
    if(col.gameObject.tag =="enemy"){
        Application.LoadLevel(sceneName);    
    }
}