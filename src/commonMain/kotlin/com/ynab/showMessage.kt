package com.ynab

fun sayHelloKotlinConf() =
    """
    Hello KotlinConf, Kotlin/Multiplatform is awesome!
    We are running on ${ platformName() }
    """.trimIndent()

expect fun platformName(): String