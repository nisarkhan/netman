using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Netman_sol.Startup))]
namespace Netman_sol
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
