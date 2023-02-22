Uzun bir aradan sonra hepinize merhabalar…

Bloğa yazı yazmayalı çok uzun bir zaman oldu. Yoğundum, zaman bulamadım gibi bahaneler üretmicem yoğun değildim öğrenciyim sonuçta ne kadar yoğun olabilirim ki ?

Bu yazımda sizlerle bir USART seri haberleşme örneği paylaşacağım. Bu sene son sınıfım ve müfredatımızda gömülü sistemler dersi var. Bu derste ARM programlamayı öğreniyoruz. Gerçekten çok zor bir ders. Geliştirme kartı olarakta STM32F4-Discovery kullanıyoruz.

Geliştirme ortamı olarak hocamız IAR Embedded Workbench kullanıyor bize de bu programı tavsiye ediyor fakat ben o programla barışamadım. Neden bilmiyorum bir türlü ısınamadım ona. Bende ARM tarafından ilk ve tek lisanslanmış program olan Keil for ARM kullanıyorum. Bana bunu kullanmak daha rahat geliyor kendimi kod yazarken daha rahat hissediyorum. Sizede bunları deneyip kendinizi hangisinde daha rahat hissediyorsanız o programı kullanmanızı tavsiye ederim.

Gelelim asıl konumuza. Keil ile STM32F4 cihazını bilgisayarla seri haberleştirmek için yazılmış o kodlara. Kodlar çok karmaşık değil zaten kodların yanına ne anlama geldiklerini yorum satırı olarak bırakmaya çalıştım. Ben site algoritmayı kısaca bir anlatayım.

Kod kısmına yazdığımız bir cümleyi bilgisayar ekranına yazan bir program. Bu kadar…

STM32F4 cihazımı direk bilgisayara baplayıp seri haberleştirme yapamıyoruz maalesef bunun için bir donanıma ihtiyacımız var. Bu donanımı internette USB to TTL diye aratırsanız bulursunuz. Bu donanım olmadan seri haberleştirme yapamıyoruz.

[Buraya tıklayarak bir örneğini görebilirsiniz.](http://www.hobidevre.com/index.php?route=product/product&product_id=359)

**Bu cahız ile STM32F4 cihazımız arasındaki bağlantıyı kurarken şu noktaya çok dikkat etmelisiniz !**

- USB to TTL donanımındaki Rx STM32F4 cihazımızın Tx’ine
- USB to TTL donanımındaki Tx STM32F4 cihazımızın Rx’ine
- USB to TTL donanımındaki Ground STM32F4 cihazımızın Ground’una bağlanmalıdır !

Hangi bacağın Tx hangisinin Rx olduğuna aşağıdaki resimden bakabilirsiniz.

![RX, TX tablosu](https://yagizhannyakali.files.wordpress.com/2016/11/usart-bacaklar.png?w=768)

Bu cümleyi bilgisayar ekranında görebilmemiz için bir yazılıma daha ihtiyacımız var tabiki. Bunun için birçok yazılım var fakat ben Termite yazılımını kullanıyorum. Kolay ve sade bir yazılım.

![Terminal çıktısı](https://yagizhannyakali.files.wordpress.com/2016/11/termite.png)

Programın arayüzü yukarıdaki resimde gördüğünüz şekilde. Şuan Failed yazıyor çünkü cihazım bilgisayara bağlı değil. Seri haberleşme yapabilmemiz için ayarlar kısmında da bazı ayarlamalar yapmalıyız.

![Arayüz ayarları](https://yagizhannyakali.files.wordpress.com/2016/11/termite-arayc3bcz.png)

Port kısmına ne yazacağımızı aygıt yöneticisinden bakıyoruz. USB to TTL donanımımız hangi porta bağlıysa port kısmını ona göre ayarlıyoruz. Baudrate kısmı ise kodlarımızda yazdığımız baudrate değerinde olmalıdır aksi taktirde haberleşme gerçekleşmez. Data bits,stop bits,parity,flow control ayarlarıda kodlarımızın USART konfügirasyon kısmında mevcuttur.
Ayarlamaları yaptıktan sonra OK tuşuna basıyoruz ve cihazımıza güç veriyoruz. Kodlarımızı cihazımıza yükleyip ekranda kod kısmına yazdığımız cümlenin sürekli tekrarladığını göreceksiniz. Tıpkı aşağıdaki gibi;

![Terminal çıktısı](https://yagizhannyakali.files.wordpress.com/2016/11/deneme.png)

İşte bu haberleşmeyi sağlayan kodlar ve açıklamaları.

```c
#include "stm32f4xx.h"                  // Device header
#include "stm32f4xx_usart.h"        // Keil::Device:StdPeriph Drivers:USART
#include <stdio.h> // C dilinin standart kütüphanesi.
#include <stdlib.h>

char str[50];
int i;

// USART ile ekrana string yazdirmak için gerekli fonksiyon.
void USART_puts(USART_TypeDef* USARTx, volatile char *s)
{
    while(*s)
    {
        while( !(USARTx->SR & 0x00000040) );
        USART_SendData(USARTx, *s);
        *s++;
    }
}

int main()
{
    GPIO_InitTypeDef GPIO_InitStructure;
    USART_InitTypeDef USART_InitStructure;

    RCC_APB1PeriphClockCmd(RCC_APB1Periph_USART2, ENABLE); // USART2'ye clock sinyali verdik.
    RCC_AHB1PeriphClockCmd(RCC_AHB1Periph_GPIOA,ENABLE);   // GPIOA portuna clock sinyali verdik.

    // Rx bacaginin konfügirasyonlarini yaptik. A portunun 2. bacagi.
    GPIO_InitStructure.GPIO_Pin = GPIO_Pin_2;
    GPIO_InitStructure.GPIO_Mode = GPIO_Mode_AF;
    GPIO_InitStructure.GPIO_Speed = GPIO_Speed_50MHz;
    GPIO_InitStructure.GPIO_OType = GPIO_OType_PP;
    GPIO_InitStructure.GPIO_PuPd = GPIO_PuPd_UP;
    GPIO_Init(GPIOA, &GPIO_InitStructure);

    GPIO_PinAFConfig(GPIOA, GPIO_PinSource2, GPIO_AF_USART2); // Bu Rx bacagini alternatif fonksiyon olarak kullanacagimizi belirttik.


    // USART'in konfügirasyonlarini yaptik.
    USART_InitStructure.USART_BaudRate = 9600;
    USART_InitStructure.USART_WordLength = USART_WordLength_8b;
    USART_InitStructure.USART_StopBits = USART_StopBits_1;
    USART_InitStructure.USART_Parity = USART_Parity_No;
    USART_InitStructure.USART_HardwareFlowControl = USART_HardwareFlowControl_None;
    USART_InitStructure.USART_Mode = USART_Mode_Tx;
    USART_Init(USART2, &USART_InitStructure);

    USART_Cmd(USART2, ENABLE); //USART2 aktif hale getirirldi.

    while(1)
    {
        sprintf(str,"Deneme 1 2 3 \n Deneme..."); // Ekrana yazdirmak istedigimiz cümleyi str char'ina attik.
        USART_puts(USART2,str); // USART_puts fonksiyonu ile de bu str char'ini ekrana yazdirdik.
        i=600000;  // Bekleme yapmaniz gerekir aksi taktirde bilgisayariniz haberlesme hizina                                            yetisemez ve mavi ekran hatasi verebilir.
        while(i)
        {
            i--;
        }
    }
}
```
