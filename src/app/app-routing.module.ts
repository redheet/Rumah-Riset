import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homepage1Component } from './components/pages/homepage1/homepage1.component';
import { Homepage2Component } from './components/pages/homepage2/homepage2.component';
import { Homepage3Component } from './components/pages/homepage3/homepage3.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TeamDetailsComponent } from './components/pages/team-details/team-details.component';
import { CareerComponent } from './components/pages/career/career.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { Service1Component } from './components/pages/service1/service1.component';
import { Service2Component } from './components/pages/service2/service2.component';
import { ServiceDetailComponent } from './components/pages/service-detail/service-detail.component';
import { BlogStandardComponent } from './components/pages/blog-standard/blog-standard.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogDetailComponent } from './components/pages/blog-detail/blog-detail.component';
import { Portfolio1Component } from './components/pages/portfolio1/portfolio1.component';
import { Portfolio2Component } from './components/pages/portfolio2/portfolio2.component';
import { PortfolioDetailComponent } from './components/pages/portfolio-detail/portfolio-detail.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { ShopDetailComponent } from './components/pages/shop-detail/shop-detail.component';
import { ContactusComponent } from './components/pages/contactus/contactus.component';

const routes: Routes = [

{path: '', component: Homepage1Component},
{path: 'homepage2', component: Homepage2Component},
{path: 'homepage3', component: Homepage3Component},
{path: 'about-us', component: AboutusComponent},
{path: 'team', component: TeamComponent},
{path: 'team-detail', component: TeamDetailsComponent},
{path: 'career', component: CareerComponent},
{path: 'FAQ', component: FaqComponent},
{path: 'service-one', component: Service1Component},
{path: 'service-two', component: Service2Component},
{path: 'service-detail', component: ServiceDetailComponent},
{path: 'blog-standard', component: BlogStandardComponent},
{path: 'blog-grid', component: BlogGridComponent},
{path: 'blog-detail', component: BlogDetailComponent},
{path: 'portfolio-one', component: Portfolio1Component},
{path: 'portfolio-two', component: Portfolio2Component},
{path: 'portfolio-detail', component: PortfolioDetailComponent},
{path: 'shop', component: ShopComponent},
{path: 'shop-detail', component: ShopDetailComponent},
{path: 'contact-us', component: ContactusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
