using UnityEngine;
using System.Collections;
using UnityEngine.UI;


[RequireComponent(typeof(AudioSource))]	//AudioSourceは必須.
[DisallowMultipleComponent]				//複数アタッチさせない.

public class GetVol : MonoBehaviour
{
    public static float a;
    //public Text volText;

    void Start()
    {
        //volText.text = "Vol:0";
        // 空の Audio Sourceを取得
        var audio = GetComponent<AudioSource>();
        // Audio Source の Audio Clip をマイク入力に設定
        // 引数は、デバイス名（null ならデフォルト）、ループ、何秒取るか、サンプリング周波数
        audio.clip = Microphone.Start(null, false, 3000, 44100);
        // マイクが Ready になるまで待機（一瞬）
        while (Microphone.GetPosition(null) <= 0) { }


        // 再生開始（録った先から再生、スピーカーから出力するとハウリングします）
        audio.Play();

    }

    //現フレームで再生されている AudioClip から平均的な音量を取得します.
    public float GetAveragedVolume()
    {
        //AudioClip の情報を格納する配列.
        //256は適当です.少なすぎれば平均的なサンプルデータが得られなくなるかもしれず,
        //多すぎれば計算量が増えますので良い感じに...
        float[] data = new float[256];
        //最終的に返す音量データ.
        a = 0;
        //AudioClipからデータを抽出します.
        GetComponent<AudioSource>().GetOutputData(data, 0);
        //音データを絶対値に変換します.
        foreach (float s in data)
        {
            a += Mathf.Abs(s);
        }
        //平均を返します.
        return a / 256;
    }

    void Update()
    {
        //AudioClip の情報を格納する配列.
        //256は適当です.少なすぎれば平均的なサンプルデータが得られなくなるかもしれず,
        //多すぎれば計算量が増えますので良い感じに...
        float[] data = new float[256];
        //最終的に返す音量データ.
        a = 0;
        //AudioClipからデータを抽出します.
        GetComponent<AudioSource>().GetOutputData(data, 0);
        //音データを絶対値に変換します.
        foreach (float s in data)
        {
            a += Mathf.Abs(s);
        }

        a = a / 256;
        //volText.text = "Vol:" + a.ToString();

        //GetAveragedVolume();
    }

}