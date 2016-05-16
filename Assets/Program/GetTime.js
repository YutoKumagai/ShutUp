#pragma strict

public static var resulttime : int;
public var TimeText : Text;

function Start () {
    resulttime = Timer.time;
    TimeText.text = "時間：" + resulttime.ToString();
}
