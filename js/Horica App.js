//Jayson van den Berg

//var 
    var prijsDrank = 0;
    var prijsEten = 0;



            while(welke != "stop"){

            var welke = prompt("Zou u een drankje of een snackje willen toeveogen aan uw bestelling? Als u het woord stop intikt, Gaat u naar het overzicht toe.");

                while (welke != "drank" && welke != "stop" && welke != "snack"){

                alert("Uw invoering is injuist. Uw bestelling kan niet worden toegevoegd.")

                welke = prompt("Zou u een drankje of een snackje willen toeoegen aan uw bestelling?")

                        }



//drank hoofdstuk
    while(welke == "drank"){

        var soort = prompt("Wilt u Wijn,Bier of Fris?");

        while (soort != "wijn" && soort != "bier" && soort != "fris"){

            alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.")

            soort = prompt("Wilt u Wijn,Bier of Fris?")
        }
            if(soort == "bier"){
                        aantalBier = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?");
                        prijsDrank = prijsDrank + 2 * aantalBier
                    }

                    if(soort == "wijn"){
                        aantalWijn = prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?");
                        prijsDrank = prijsDrank + 4 * aantalWijn
                    }

                    if(soort == "fris"){
                        aantalFris = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?");
                        prijsDrank = prijsDrank + 1 * aantalFris
                    }

                    welke = prompt("Wilt u drank of een snack toevoegen aan uw bestelling?");

                }

    //snack hoofdstuk
    if (welke == "snack"){

            var bitterbal = prompt("wilt u 8 of 16 bitterballen?")

            while (bitterbal != "8" && bitterbal != "16"){

                 alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.");

                bitterbal = prompt("wilt u 8 of 16 bitterballen?");
            }

                if(bitterbal == "8"){
                    aantalSchalen = prompt("hoeveel schalen van 8 porties wilt u?");
                    prijsEten = prijsEten + 6 * aantalSchalen
                }

                if(bitterbal == "16"){
                    aantalSchalen = prompt("hoeveel schalen van 16 porties wilt u?");
                    prijsEten = prijsEten + 11 * aantalSchalen
                }

          }
    }
//stop code
if(welke == "stop"){
    //text voor op page
            document.write("<h2>De JayJay snackbar</h2>");
            document.write("<h3>Hier vind u uw bestelling en alle prijzen.</h3>");

   if(soort == "wijn"){

             document.write("U heeft " +aantalWijn)
             document.write("x " +soort)
             document.write(" besteld en is in totaal: " +prijsDrank)
             document.write(",-");
             document.write("<br>");

   }if(soort == "bier"){

             document.write("U heeft " +aantalBier)
             document.write("x " +soort)
             document.write(" besteld en is in totaal: " +prijsDrank)
             document.write(",-");
             document.write("<br>");

   }
   if(soort == "fris"){

             document.write("U heeft " +aantalFris)
             document.write("x " +soort)
             document.write(" besteld en is in totaal: " +prijsDrank)
             document.write(",-");
             document.write("<br>");

   }
if(bitterbal == "16"){

             document.write("U heeft " +bitterbal)
             document.write(" bitterballen genomen en " +aantalSchalen)
             document.write(" schalen besteld het in totaal: " +prijsEten)
             document.write(",-");
             document.write("<br>");

   }

   if(bitterbal == "8"){

             document.write("U heeft " +bitterbal)
             document.write(" bitterballen genomen en " +aantalSchalen)
             document.write(" schalen besteld het in totaal: " +prijsEten)
             document.write(",-");
             document.write("<br>");

   }

             document.write('<hr style="border-top: dotted 2px;" />')
             document.write("Het kost in totaal: " +((prijsEten) + (prijsDrank)))
             document.write(",-");

}