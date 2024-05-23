import { IonButton, IonIcon, IonInput, IonTextarea } from '@ionic/react';
import { bagHandle, bed, beer, bicycle, book, briefcase, business, cafe, call, carSport, fastFood, fitness, football, footsteps, gameController, gift, glasses, headset, home, iceCream, musicalNote, pint, pizza, receipt, restaurant, school, shirt, storefront, ticket, tv, wallet, walletOutline, watch, water, wifi } from 'ionicons/icons';
import React, { useRef, useState } from 'react';


const AddWalletteComponent: React.FC = () => {
    const [walletteTitle, setWalletteTitle] = useState<string>();
    const [walletteDescription, setWalletteDescription] = useState<string>();
    const [walletteIcon, setWalletteIcon] = useState<string>();

    const myInput = useRef<HTMLInputElement>(null);

    const wallettes = [
        'Transportation',
        'Food',
        'Bills & Payments',
        'Groceries',
        'Toileteries',
        'Offerings'
    ]

    function autocomplete(inp: HTMLInputElement, arr: string[]) {
        let currentFocus: number;
      
        inp.addEventListener("input", function() {
        //   let a, b, i = this.value;
          const val = this.value;
          closeAllLists();
          if (!val) { return false; }
          currentFocus = -1;
          const a = document.createElement("DIV");
          a.setAttribute("id", this.id + "autocomplete-list");
          a.setAttribute("class", "autocomplete-items");
          (this.parentNode as ParentNode).appendChild(a);
          let i;
          for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
              const b = document.createElement("DIV");
              b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
              b.innerHTML += arr[i].substr(val.length);
              b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function() {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
              });
              a.appendChild(b);
            }
          }
        });
      
        inp.addEventListener("keydown", function(e: KeyboardEvent) {
          const x: HTMLCollectionOf<HTMLDivElement> = document.getElementById(this.id + "autocomplete-list")?.getElementsByTagName("div") as HTMLCollectionOf<HTMLDivElement>;
          if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
          } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
          } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
              if (x) x[currentFocus].click();
            }
          }
        });
      
        function addActive(x: HTMLCollectionOf<HTMLDivElement>) {
          if (!x) return false;
          removeActive(x);
          if (currentFocus >= x.length) currentFocus = 0;
          if (currentFocus < 0) currentFocus = (x.length - 1);
          x[currentFocus].classList.add("autocomplete-active");
        }
      
        function removeActive(x: HTMLCollectionOf<HTMLDivElement>): void {
          for (let i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
          }
        }
      
        function closeAllLists(elmnt?: HTMLDivElement): void {
          const x: HTMLCollectionOf<Element> = document.getElementsByClassName("autocomplete-items");
          for (let i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
              x[i].parentNode?.removeChild(x[i]);
            }
          }
        }
      
        document.addEventListener("click", function (e: Event) {
          closeAllLists(e.target as HTMLDivElement);
        });
    }

    return (
        <div className="mod-wrap">
            <div className="form pad">
                <div className="form-wrap">
                    <div className={`input-wrap`}>
                        <input value={walletteTitle} onInput={(ev) => setWalletteTitle(ev.currentTarget.value as string)} ref={myInput} id="myInput" type="text" name="myCountry" onFocus={() => autocomplete(myInput.current as HTMLInputElement, wallettes)} autoComplete='off'></input>
                        <span className="in-tl">
                            <small>Wallette</small>
                        </span>
                        <span className="in-ic">
                            <IonIcon icon={walletOutline}></IonIcon>
                        </span>
                    </div>
                    <div className={`input-wrap ${walletteDescription && 'checked'}`}>
                        <IonTextarea value={walletteDescription} onIonInput={(ev) => setWalletteDescription(ev.detail.value as string)} autoGrow></IonTextarea>
                        <span className="in-tl">
                            <small>Description</small>
                        </span>
                    </div>
                    <div className="icons">
                        <span className="form-icon">
                            <IonIcon icon={call}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={fastFood}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={receipt}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={wallet}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={business}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={beer}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={glasses}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={footsteps}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={gameController}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={headset}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={iceCream}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={musicalNote}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={bed}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={briefcase}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={carSport}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={cafe}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={bicycle}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={book}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={bagHandle}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={gift}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={fitness}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={home}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={pizza}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={pint}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={storefront}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={shirt}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={watch}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={tv}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={football}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={restaurant}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={school}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={ticket}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={watch}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={water}></IonIcon>
                        </span>
                        <span className="form-icon">
                            <IonIcon icon={wifi}></IonIcon>
                        </span>
                    </div>
                </div>

                <IonButton className="save">Save</IonButton>
            </div>
        </div>
    );
}

export default AddWalletteComponent;