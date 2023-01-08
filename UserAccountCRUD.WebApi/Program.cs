using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Serialization;
using UserAccountCRUD.WebApi.Entity.Models;

var builder = WebApplication.CreateBuilder(args);


string connection = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationDbContext>();
//builder.Services.AddControllersWithViews().AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore).AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "ReactJSDomain", policy => policy.
        AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});
var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

}

app.UseCors("ReactJSDomain");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
