export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Users Props
export interface UserProps {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address?:  string|number;
    phone?:    string;
    website?:  string;
    company?:  string|number;
  
    Address?: {
    street: string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     string|number;
}
  Geo?: {
    lat: string;
    lng: string;
}
  Company?: {
    name:        string;
    catchPhrase: string;
    bs:          string;
}
}
 
// Post Creator Form Props
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// UserData Props
export interface UserData {
    id:       number;
    name:     string;
    username: string;
    email?:    string;
    address?:  string|number;
    phone?:    string;
    website?:  string;
    company?:  string|number;

    Address?: {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     string|number;
}

Geo?: {
    lat: string;
    lng: string;
}

Company?: {
    name:        string;
    catchPhrase: string;
    bs:          string;
}
}


export interface UserModalProps{
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
}