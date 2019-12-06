package com.ynab.myapplication

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.ynab.sayHelloKotlinConf
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        mainTextView.text = sayHelloKotlinConf()
    }
}
