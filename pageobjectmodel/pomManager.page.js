import Leaddetailspage from "./createandconvertlead/leaddetailspage.page";
import loginapp from "./login.page";
import createlead from "./createandconvertlead/lead.page";
import Convertlead from "./createandconvertlead/convertleadpage.page";
import Createcampaignheader from "./campaign/campheadercreatepage1.page";
import Campaigndetail from "./campaign/campaigndetailspage4.page";
import Createtargetemail2 from "./campaign/campemailtargetlpage2.page";
import Createtemplateemail from "./campaign/campemailtemplatepage3.page";
import accountcreation from "./account.page";
import campaignlookup from "./campaignlookup.page";
import createopportunities from "./opportunities.page";
import Createtask from "./task.page";
import Createproduct from "./product.page";
import Createcontact from "./contact.page";


class POManager {
    constructor(page) {
        this.page = page;
    }

    getloginapp(){
        if(!this.loginpage){
            this.loginpage = new loginapp(this.page);
        }
        return this.loginpage;
    }

    getcreatelead(){
        if(!this.leadmain){
            this.leadmain = new createlead(this.page);
        }
        return this.leadmain;
    }

    getLeaddetailspage(){
        if(!this.leaddetail){
            this.leaddetail = new Leaddetailspage(this.page);
        }
        return this.leaddetail;
    }

    getConvertlead(){
        if(!this.leadconvert){
            this.leadconvert = new Convertlead(this.page);
        }
        return this.leadconvert;
    }

     getaccountcreation(){
        if(!this.accountpage){
            this.accountpage = new accountcreation(this.page);
        }
        return this.accountpage;
    }

    getCreatecampaignheader(){
        if(!this.campaignheader){
            this.campaignheader = new Createcampaignheader(this.page);
        }
        return this.campaignheader;
    }

    getCreatetargetemail2(){
        if(!this.campaignbudget){
            this.campaignbudget = new Createtargetemail2(this.page);
        }
        return this.campaignbudget;
    }

    getCreatetemplateemail(){
        if(!this.campaigntargetlist){
            this.campaigntargetlist = new Createtemplateemail(this.page);
        }
        return this.campaigntargetlist;
    }

    getCampaigndetail(){
        if(!this.campaignsummary){
            this.campaignsummary = new Campaigndetail(this.page);
        }
        return this.campaignsummary;
    }

    getcampaignlookup(){
        if(!this.campaignlook){
            this.campaignlook = new campaignlookup(this.page);
        }
        return this.campaignlook;
    }
    getcreateopportunities(){
        if(!this.opportunitypage){
            this.opportunitypage = new createopportunities(this.page);
        }
        return this.opportunitypage;
    }
    getCreatetask(){
        if(!this.taskpage){
            this.taskpage = new Createtask(this.page);
    }
    return this.taskpage;
    }
    getCreateproduct(){
        if(!this.productpage){
            this.productpage = new Createproduct(this.page);
        }
        return this.productpage;
    }
    getCreatecontact(){
        if(!this.contactpage){
            this.contactpage = new Createcontact(this.page);
        }
        return this.contactpage;
      } 


}
export default POManager;