using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class CameraView : MonoBehaviour
{
    public float x;
    public float y;
    public float z;
    public int viewpoint;

    // Use this for initialization
    void Start()
    {
        viewpoint = ChangeView.ViewFlagPoint();
    }

    // Update is called once per frame
    void Update()
    {
        x = transform.eulerAngles.y;
        y = transform.eulerAngles.x;
        z = 0;// transform.eulerAngles.z;

        if (x > 180) x = x - 360;
        x = x + Input.GetAxis("Mouse X") * 5;
        x = Mathf.Clamp(x + Input.GetAxis("Mouse X") * 5, -100, 100);
        if (x < 0) x = x + 360;

        if (y > 180) y = y - 360;
        if (viewpoint % 2 == 0) y = Mathf.Clamp(y + Input.GetAxis("Mouse Y") * 5, -50, 60);
        if (viewpoint % 2 == 1) y = Mathf.Clamp(y - Input.GetAxis("Mouse Y") * 5, -50, 60);

        if (y < 0) y = y + 360;
        transform.rotation = Quaternion.Euler(y, x, 0);
    }
}