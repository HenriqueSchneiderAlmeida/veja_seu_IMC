import { useState, useEffect } from "react"; 

import styles from './formularia.module.css';

const Formulario = ({valorPeso}, {valorAltura}) => {
    const [entraAltura, setEntraAltura] = useState('')
    const [entraPeso, setEntraPeso] = useState('')
    const calculaResultado = () => {      
        const alturaQuad = entraAltura * entraAltura;
        const resultado = (entraPeso / alturaQuad) * 10000;     
        console.log("meu resultado");
        console.log(resultado);

        if (resultado < 18.5) {
            return ( 
                <p className={styles.resposta}>Voce é magro(a) IMC = {resultado.toFixed(2)}</p>
            )} 
        if (resultado > 18.5 && resultado < 24.9) {
            return (
                <p className={styles.resposta}>Você está no peso ideal. IMC = {resultado.toFixed(2)}</p>
            )}
        if (resultado > 24.9 && resultado < 30) {
            return (
                <p className={styles.resposta}>Você está com sobrepeso. IMC = {resultado.toFixed(2)}</p>
            )}                
        if (resultado > 30) {
            return (
                <p className={styles.resposta}>Você está obeso. IMC = {resultado.toFixed(2)}</p>
            )} else {
                return (
                <p className={styles.resposta}>IMC não localizado!</p>                
                )
            }            
    }
        return (
            <form className={styles.formGlobal}>
                <h2>Cálcule o seu IMC - Índice de massa corporal.</h2>
                <div className={styles.entrada} > 
                    <label className={styles.label}><b> Digite aqui o seu peso: </b></label>
                    <input className={styles.input} type="text"
                        onChange={(e) => setEntraPeso(e.target.value)}></input>
                    <br />
                    <label className={styles.label}><b> Digite aqui a sua altura (em cm): </b></label>
                    <input className={styles.input} type="text"
                        onChange={(e) => setEntraAltura(e.target.value)}></input>            
                </div>
            {calculaResultado()}
          </form>
        )
}
export default Formulario