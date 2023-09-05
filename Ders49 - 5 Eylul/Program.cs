Console.WriteLine("Sayı Tahmin Etme Uygulaması");

Console.Write("Maksimum sayıyıyı belirle: ");
string maxDeger = Console.ReadLine();
int maxDegerInt = Convert.ToInt32(maxDeger);


Random rnd = new Random();
int sayi1 = rnd.Next(maxDegerInt);


string tahmin1; 
int tahmin1Int;

string tekmiciftmi(){
    if (sayi1 % 2 == 0){
        return "çift";
    }else {
        return "tek";
    }
}

Console.WriteLine("İpucu: Sayı " + tekmiciftmi());

for (int i = 3; i > 0; i--){
   Console.Write(i + " canın kaldı. " + "Bir sayı giriniz: ");
    tahmin1 = Console.ReadLine();
    tahmin1Int = Convert.ToInt32(tahmin1);

    if (tahmin1Int == sayi1){
        Console.WriteLine("Doğru! Tebrikler!");
        return;
    }else {
        // tahmin1Int > sayi1 -- aşağı
        // tahmin1Int < sayi1 -- yukarı

        if (tahmin1Int > sayi1) {
            Console.WriteLine("Aşağı!");
        }else if ( tahmin1Int < sayi1){
            Console.WriteLine("Yukarı!");
        }

        Console.WriteLine("Yanlış, tekrar deneyiniz!");
      
    }

}

Console.WriteLine("Doğru cevap: " + sayi1);

