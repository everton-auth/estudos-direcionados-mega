using MVC;
using System.Text.Json;

var builder = WebApplication.CreateBuilder( args );

// Add services to the container.
builder.Services.AddControllersWithViews();

var a = new MainServices();
a.ConfigureServices( builder.Services );

var app = builder.Build();
// Configure the HTTP request pipeline.
if( !app.Environment.IsDevelopment() ) {
    app.UseExceptionHandler( "/Home/Error" );
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

using( var scope = app.Services.CreateScope() ) {
    var services = scope.ServiceProvider;
    try {
        var context = services.GetRequiredService<ApplicationContext>();
        context.Database.EnsureCreated();
        var repo = new ProdutoRepository( context );
        repo.SaveProdutos( app );

    } catch( Exception ex ) {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError( ex.Message );
    }
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default" ,
    pattern: "{controller=Pedido}/{action=Carrossel}/{id?}" );

app.Run();