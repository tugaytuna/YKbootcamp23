// Online C# Editor for free
// Write, Edit and Run your C# code using C# Online Compiler

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
        //string isim = "18";
        double sicaklik = 30.6;
        bool login = false;
        
        sicaklik = 35;
        
        if (sicaklik > 30) {
            Console.WriteLine("Cok sicak!");
        }else {
            Console.WriteLine("Sicak Degil!");
        }
        
        Console.WriteLine("Hello  World");
        Console.WriteLine(yas);
        Console.WriteLine(isim);
        Console.WriteLine(sicaklik);
        Console.WriteLine(login);
        
        for (int i = 1;i<=20;i++){
            if (i % 2 == 0){
                Console.WriteLine(i);    
            }
            
        }
        
        mesajGonder();
        
        
        
    }
}