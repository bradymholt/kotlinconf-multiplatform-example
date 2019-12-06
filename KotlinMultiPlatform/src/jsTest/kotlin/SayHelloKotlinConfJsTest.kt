import com.ynab.sayHelloKotlinConf
import kotlin.test.*

class SayHelloKotlinConfJsTest {
    @Test
    fun testSayHelloJs() {
        assertEquals(
            "We are running on JavaScript",
            sayHelloKotlinConf().lines().last()
        )
    }
}