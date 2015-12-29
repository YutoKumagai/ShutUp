#pragma strict

public static var score : int;
public var ScoreText : Text;

function Awake() {
    DontDestroyOnLoad(this);
}

function Start () {
    score = 0;
}


function Update () {
    var s : int = Mathf.FloorToInt(score);
    ScoreText.text = "スコア：" + s.ToString();
}

function OnTriggerEnter (col : Collider) {
    if(col.gameObject.tag =="enemy"){
        score=score+1;
    }
}
