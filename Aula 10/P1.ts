import { pessoa } from "./pessoa";

export class P1 extends pessoa{
    public pessoajuridica: string

    construtor(nome, idade ,pessoajuridica) {
        super(nome, idade)

        this.pessoajuridica = pessoajuridica

    }
    informação(){}
}