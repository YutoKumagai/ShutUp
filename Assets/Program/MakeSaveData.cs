using UnityEngine;
using System.Collections;
using System.IO;
using System;

public class MakeSaveData : MonoBehaviour { 
	// Use this for initialization
	void Start () {
        if (System.IO.File.Exists("stage1.txt"))
        {
        }
        else
        {
            StreamWriter sw;
            FileInfo fi;
            fi = new FileInfo("stage1.txt");
            sw = fi.AppendText();
            sw.WriteLine("0,0,0,0,0,");
            sw.Close();
        }

        if (System.IO.File.Exists("stage2.txt"))
        {
        }
        else
        {
            StreamWriter sw;
            FileInfo fi;
            fi = new FileInfo("stage2.txt");
            sw = fi.AppendText();
            sw.WriteLine("0,0,0,0,0,");
            sw.Close();
        }

    }
	
}
