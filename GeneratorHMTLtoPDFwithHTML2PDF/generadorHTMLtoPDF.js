//Generador de html a pdf
const options = {
    margin: 0.1,
    filename: ".pdf",//Ingresar el nombre que desea que se guarde el pdf,
    image: {
        type: 'jpeg',
        quality: 0.98
    },
    html2canvas: {
        scale: 2,
        logging: true,
        dpi: 192,
        letterRendering: true
    },
    jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
    }
}

const element = document.getElementById('divpdf');
html2pdf().from(element).set(options).toPdf().save();

//CDN que funciona este script
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.2.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" integrity="sha512-qZvrmS2ekKPF2mSznTQsxqPgnpkI4DNTlrdUmTzrDgektczlKNRRhy5X5AAOnx5S09ydFYWWNSfcEqDTTHgtNA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> */}