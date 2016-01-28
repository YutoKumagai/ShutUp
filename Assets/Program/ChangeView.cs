using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class ChangeView : MonoBehaviour {

    public static int viewflag=0;
    public Text Viewpoint;


    public void ChangeButton(){
        if (viewflag % 2 == 0){
            viewflag = viewflag+ 1;
            Viewpoint.text = "ノーマル視点";
        } else {
             viewflag = viewflag + 1;
             Viewpoint.text = "Y軸反転視点";
        }
    }
    public static int ViewFlagPoint(){
        return viewflag;
    }
}
