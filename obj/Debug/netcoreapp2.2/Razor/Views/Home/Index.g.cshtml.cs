#pragma checksum "C:\Users\andrei.funaru\Desktop\Facultate\4.I\DAW\Library\BibliotecaOnline\BibliotecaOnline\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "21f38cb1d158b6179779482312de5738d36cd17c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/Index.cshtml", typeof(AspNetCore.Views_Home_Index))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\andrei.funaru\Desktop\Facultate\4.I\DAW\Library\BibliotecaOnline\BibliotecaOnline\Views\_ViewImports.cshtml"
using BibliotecaOnline;

#line default
#line hidden
#line 2 "C:\Users\andrei.funaru\Desktop\Facultate\4.I\DAW\Library\BibliotecaOnline\BibliotecaOnline\Views\_ViewImports.cshtml"
using BibliotecaOnline.Models;

#line default
#line hidden
#line 3 "C:\Users\andrei.funaru\Desktop\Facultate\4.I\DAW\Library\BibliotecaOnline\BibliotecaOnline\Views\_ViewImports.cshtml"
using BibliotecaOnline.Areas.Identity.DbModels;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"21f38cb1d158b6179779482312de5738d36cd17c", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"fa2ae7f54a149428315ac8f2da94ab16cac2c964", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 1 "C:\Users\andrei.funaru\Desktop\Facultate\4.I\DAW\Library\BibliotecaOnline\BibliotecaOnline\Views\Home\Index.cshtml"
  
    ViewData["Title"] = "Home Page";

#line default
#line hidden
            BeginContext(45, 277, true);
            WriteLiteral(@"
<app-root>
</app-root>

<script type=""text/javascript"">
    window.addEventListener(""load"", function () {
        if (window.location.hash == ""#/"") {
            console.log(""Here"");
            window.location.hash = ""#/library/index""
        }
    });

</script>");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
