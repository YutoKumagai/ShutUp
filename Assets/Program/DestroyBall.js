#pragma strict

function Update () {

    if(Input.GetKeyDown(KeyCode.Space)){
        this.SendMessage('Explode');
    }

}