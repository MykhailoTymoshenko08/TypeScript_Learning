// let projectName: string;
// let modelsCount: number;
// let isOpenSource: boolean;
// let supportedLanguages: string[] = ["English", "Spanish", "Ukrainian"]

// function getProjectStatus(name_of_projecct :string, count: number) :string{
//     return `Project ${name_of_projecct} work with ${count} models`;
// }

// interface AIModel {
//     id: number;
//     name: string;
//     provider: string;
//     contextWindow: number;
//     isFree: boolean;
// } 

// const myModel: AIModel = {
//     id: 1, 
//     name: "ChatGPT", 
//     provider: "OpenAI", 
//     contextWindow: 1, 
//     isFree: true
// };

// function printModelInfo(param: AIModel): void {
//     console.log(param.name, param.provider);
// }

// type BaseModel = {
//     id: number,
//     name: string
// };
// type AI_Features = {
//     canGenerateImages: boolean,
//     maxTokens: number
// }

// type AdvancedModel = BaseModel & AI_Features;

// type Response = string | AdvancedModel;

// function processResponse(data:Response) : string{
//     if(typeof data === "string"){
//         return data;
//     }   
//     else{
//         return `Model ${data.name} have limit ${data.maxTokens} tokens`;
//     }
// }


// type BaseModel = {
//     id: number,
//     name: string
// };
// type AI_Features = {
//     canGenerateImages: boolean,
//     maxTokens: number
// }
// type AdvancedModel = BaseModel & AI_Features;
// interface ApiResponse<T>    {
//     status?: "success",
//     data: T
// }
// let userResponse: ApiResponse<string> = {data: "Bob"};
// let modelResponse: ApiResponse<AdvancedModel>;

// type GalleryInfo = Pick<AdvancedModel, "id" | "name">;
// type ModelWithoutId = Omit<AdvancedModel, "id">;
// type patch = Pick<Partial<AdvancedModel>, "maxTokens">;


interface ChatMessage {
    id: string,
    text: string,
    timestamp: number
}

async function sendMessage(inp: string): Promise<ChatMessage>  {
    const newMessage : ChatMessage = {
        id: "2",
        text: inp,
        timestamp: Date.now()
    };
    return newMessage;
}

