Import { Veiculo } from "./Veiculo";

export class F1 Extends Veiculo{
    public tamanho: Number;

    construtor(tamanho,roda,placa) ){
        super(roda,placa)
        this.tamanho = tamanho
    }

    velocidade(){}
}