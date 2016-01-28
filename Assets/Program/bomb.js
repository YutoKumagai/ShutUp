#pragma strict

var maxFallDistance : int = -10;

function Update () {
    if (transform.position.y <= maxFallDistance) {
        Destroy(gameObject);
    }
}

function OnCollisionEnter(other:Collision) {
    this.SendMessage("Explode");
    gameObject.GetComponent(Renderer).enabled = false;
    gameObject.GetComponent(Collider).enabled = false;
    if (other.gameObject.tag =="enemy") {
        Destroy(other.gameObject);
        Out.score += 1;   
    }
}