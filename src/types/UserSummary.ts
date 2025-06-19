
export interface UserSummary {
    displayname: string;
    login:string;
    image_url: string;
}

export const UserSummaryInitValue : UserSummary  = {
    displayname: '',
    login: '', 
    image_url:''
}