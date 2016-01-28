using UnityEngine;
using System.Collections;

public class TextColor : MonoBehaviour {
    private GUIStyle style;


    void Update() {
        style = new GUIStyle();
        style.fontSize = 40;
        GUIStyleState styleState = new GUIStyleState();
        styleState.textColor = new Color(1f, 1f, 1f);
        style.normal = styleState;
    }
}
