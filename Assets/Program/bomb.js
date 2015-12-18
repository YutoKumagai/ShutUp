#pragma strict

var maxFallDistance : int = -10;

function Update () {
    if (transform.position.y <= maxFallDistance) {
        // 自分自身を削除
        Destroy(gameObject);
    }
}

function OnCollisionEnter(other:Collision) {
    // 何かにぶつかったら爆発させる
    // otherにはぶつかったオブジェクトの情報が入る
    this.SendMessage("Explode");

    // 砲弾は見えなくする
    // Destroyしてしまうと音声が再生できなくなる
   // gameObject.renderer.enabled = false;
    gameObject.GetComponent(Renderer).enabled = false;
    // 砲弾も破壊されるのでこれ以上衝突しないようにする
   // gameObject.collider.enabled = false;
    gameObject.GetComponent(Collider).enabled = false;
    // ブロックにぶつかったときだけ
    if (other.gameObject.tag =="enemy") {
        // ぶつかった対象のブロックは削除
        Destroy(other.gameObject);
        Out.score += 1;   
    }
}