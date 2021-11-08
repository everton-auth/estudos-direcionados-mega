﻿using System;
using Bytebank.SistemaAgencia.Tratamentos;
using _ByteBank.Transacao;
namespace Bytebank.SistemaAgencia {
    class Program {
        static void Main( string[] args ) {


            Lista<int> ListaIdades = new Lista<int>();
            ListaIdades.AdicionarVarios( 12 , 16 , 80 , 42 );
            for( int i = 0 ; i < ListaIdades.Tamanho ; i++ ) {
                int idade = ListaIdades[ i ];
                Console.WriteLine( $"Idade no indice {i}: {idade}" );
            }



            Console.ReadLine();
        }













        static void listaObject() {
            ListaDeObject ListaIdades = new ListaDeObject();
            ListaIdades.AdicionarVarios( 12 , 16 , 80 , 42 );
            for( int i = 0 ; i < ListaIdades.Tamanho ; i++ ) {
                int idade = ( int ) ListaIdades[ i ];
                Console.WriteLine( $"Idade no indice {i}: {idade}" );
            }
        }

        static void listaContas() {

            ListaDeContas Lista = new ListaDeContas();

            ContaCorrente contaEverton = new ContaCorrente( 545 , 5254845 );

            Lista.AdicionarVarios(
                contaEverton ,
                new ContaCorrente( 525 , 5262554 ) ,
                new ContaCorrente( 525 , 5262554 ) ,
                new ContaCorrente( 525 , 5262554 ) ,
                new ContaCorrente( 525 , 5262554 ) ,
                new ContaCorrente( 525 , 5262554 ) ,
                new ContaCorrente( 525 , 5262554 )
                );
        }

        static void loopInfinito() {
            for( int i = 0 ; i >= -1 ; i++ ) {
                Console.WriteLine( i );
            }
            Console.ReadLine();
        }

        static void urlTestes() {
            string url = "https://github.com/everton-auth?tab=repositories";
            ExtractURLArgs extrator = new ExtractURLArgs( url );
            Console.WriteLine( extrator.GetValorDoArgumento( "tab" ) );
            Console.ReadLine();
        }
    }
}

