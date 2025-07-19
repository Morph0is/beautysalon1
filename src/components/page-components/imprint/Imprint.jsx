import React from 'react';
import {Card, Stack} from "@mui/material";
import './Imprint.scss';



function Imprint(){
    return(
        <Card className={'imprint-card'} >

            <p className={'imprint-text'}><b>Verantwortliche Instanz:</b><br/>Beauty Salon Hasti<br/>Zürcherstrasse 101<br/>8406
                Winterthur<br/>Schweiz<br/><strong>E-Mail</strong>:
                beauty@hasti.ch<br/><br/><strong>Vertretungsberechtigte Personen</strong><br/>Hasti
                Anwari<br/><br/><strong>Name des Unternehmens</strong>: Beauty Salon
                Hasti<br/><br/><strong>Haftungsausschluss</strong><br/>Der Autor übernimmt keine Gewähr für die
                Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.<br/>Haftungsansprüche
                gegen den Autor wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der Nutzung
                bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch
                technische Störungen entstanden sind, werden ausgeschlossen.<br/><br/>Alle Angebote sind freibleibend.
                Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte
                Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig
                einzustellen.<br/><br/><strong>Haftungsausschluss für Inhalte und Links</strong><br/>Verweise und Links
                auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung
                für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr
                des jeweiligen Nutzers.<br/><br/><strong>Urheberrechtserklärung</strong><br/>Die Urheber- und alle
                anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website, gehören
                ausschliesslich Beauty Salon Hasti oder den speziell genannten Rechteinhabern. Für die Reproduktion
                jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus
                einzuholen.<br/><br/><strong>Quelle</strong>: <a
                    href='https://brainbox.swiss/'>BrainBox Solutions</a>
            </p>
        </Card>);
}
export default function ImprintContainer() {
return(
    <Stack alignItems={'center'} justifyContent={'center'}>
        <Stack alignItems={'center'} justifyContent={'center'} className={'info-sub-div'}>
            <Imprint/>
        </Stack>
    </Stack>
);
}
