#pragma strict

import UnityEngine.UI;

public static var time : float;
public var sceneName : String;

function Awake() {
    DontDestroyOnLoad(this);
}

function Start () {
    time = 0;
}

function Update () {
    time += Time.deltaTime;
    var t : int = Mathf.FloorToInt(time);
    var uiText : Text = GetComponent.<Text>();
    uiText.text = "時間：" + t.ToString();
}