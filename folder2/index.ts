let projectName: string;
let modelsCount: number;
let isOpenSource: boolean;
let supportedLanguages: string[] = ["English", "Spanish", "Ukrainian"]

function getProjectStatus(name_of_projecct :string, count: number) :string{
    return `Project ${name_of_projecct} work with ${count} models`;
}