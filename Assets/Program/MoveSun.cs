using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class MoveSun : MonoBehaviour {
    System.DateTime now = System.DateTime.Now;
    public int hour;
    public int minute;
    public float timeleft;
    void Start()
    {
        hour = now.Hour;
        minute = now.Minute;
        transform.rotation = transform.rotation * Quaternion.Euler((hour * 15 + minute / 4)-133, 0, 0);
    }

    void Update()
        //360/24=15
    {
        timeleft = Time.deltaTime;
        if (timeleft >= 60.0)
        {
           timeleft = 0;
           hour = now.Hour;
           minute = now.Minute;
           transform.rotation = transform.rotation * Quaternion.Euler((hour * 15 + minute / 4), 0, 0);
        }
    }       
}
