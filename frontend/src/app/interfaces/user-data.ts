export interface UserData {
    id : number
    userid : string
    username : string 
    salt : string
    pwd_text : string
    pwd_md5 : string
    pwd_sha : string
    info:[UserInfo]
    contact : [UserContact]
    location : [UserLocation]
}

export interface UserInfo {
    title : string
    first : string
    last: string
    gender : string
    nationality : string
    dob : Date
    age : number
    reg_date : Date
    profile_l : string
    profile_m : string
    profile_t : string
}

export interface UserContact {
    email : string
    phone : string
    cell : string
}

export interface UserLocation {
    street_name : string
    street_no : number
    city : string
    state: string
    country : string
    postcode : string
    coordinates_lat : number
    coordinates_long : number
    timezone_offset : string
    timezone_desc : string    
}