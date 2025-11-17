using System;

namespace ConsoleApp41
{
    public class Animal
    {
        public string Name { get; set; }
        //constructor
        public Animal(string name)
        {
            Name = name;
        }
        //virtual
        public virtual void Speak()
        {
            Console.WriteLine($"{Name} make a sound");
        }
    }

    public class Cat : Animal
    {
        public Cat(string name) : base(name){ }
        public override void Speak()
        {
            Console.WriteLine($"{Name} Say Meow!");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Animal cat = new Cat("ABC");
            cat.Speak();
        }
    }
}
