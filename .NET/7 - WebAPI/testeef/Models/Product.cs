﻿using System.ComponentModel.DataAnnotations;
namespace testeef.Models {
    public class Product {

        [Key]
        public int Id { get; set; }

        [Required( ErrorMessage = "Este campo é obrigatório" )]
        [MaxLength( 60 , ErrorMessage = "Este campo deve conter no máximo 60 caracteres" )]
        [MinLength( 3 , ErrorMessage = "Este campo deve conter no mínimo 3 caracteres" )]
        public string Title { get; set; }

        [MaxLength( 1024 , ErrorMessage = "Este campo deve conter no máximo 1024 caracteres" )]
        public string Description { get; set; }

        [Required( ErrorMessage = "Este campo é obrigatório" )]
        [Range( 1 , int.MaxValue , ErrorMessage = "O preço deve ser naior que zero" )]
        public decimal Price { get; set; }

        [Required( ErrorMessage = "Este campo é obrigatório" )]
        [Range( 1 , int.MaxValue , ErrorMessage = "Categoria inválida" )]
        public decimal CategoryId { get; set; }

        public Category Category { get; set; }

    }
}
