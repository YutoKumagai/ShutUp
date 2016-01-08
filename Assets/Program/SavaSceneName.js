#pragma strict

public static var scene;

function Awake() {
    DontDestroyOnLoad(this);
}

function Update () {
    scene = Application.loadedLevelName; 
}