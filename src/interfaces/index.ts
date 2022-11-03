interface IStatus {
    label:string;
    color:string;
}

export interface IMetadata {
    title:string;
    icon:string;
    article:string;
}

export interface IData {
    title:string;
    text:string;
    status:IStatus[]
    metadata:IMetadata[];
};

