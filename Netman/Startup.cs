using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Netman.Startup))]
namespace Netman
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
