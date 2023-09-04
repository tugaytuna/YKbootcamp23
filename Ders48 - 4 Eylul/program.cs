using System;

public class HelloWorld
{
    public static void mesajGonder(){
        Console.WriteLine("Yeni Fonksiyon Calisti");
    }
    
    
    public static void Main(string[] args)
    {
        int yas = 18;
        string isim = "tugay";
        string yas2 = "18";
        double sicaklik = 30.6;
        bool login = false;
        
        int[] dizi1 = {1,2,5,87,9,5};
        
        Console.WriteLine(dizi1[5]);
        
        
        for (int i = 0;i<dizi1.Length; i++  ){
            Console.WriteLine(dizi1[i]);
        }
        
        sicaklik = 25;
        
        
        if (sicaklik > 30) {
            Console.WriteLine("Cok sicak!");
        }else {
            Console.WriteLine("Sicak Degil!");
        }
        
        //Console.WriteLine("Hello  World");
        //Console.WriteLine(yas);
        //Console.WriteLine(yas2);
        //Console.WriteLine(isim);
        //Console.WriteLine(sicaklik);
        //Console.WriteLine(login);
        
        //Console.Write("kk");
        
        for (int i = 1; i <= 2; i++){
            if (i % 2 == 1){
                Console.WriteLine(i);    
            }
            
        }
        
        mesajGonder();
        
        
        string consoleRead = Console.ReadLine();
        
        Console.WriteLine("Kod bitti!");
        Console.WriteLine("Hos Geldin "  +  consoleRead);
        
        Console.Write("Sifrenizi giriniz: ");
        string sifre = Console.ReadLine();
        
        if (sifre == "tugay") {
            Console.WriteLine("Sifre dogru!");
        }else {
            Console.WriteLine("Sifre yanlis!");
        }
        
        
        
        
        
        
        
        
        
        
    }
}