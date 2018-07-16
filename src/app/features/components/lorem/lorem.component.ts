import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lorem',
  templateUrl: './lorem.component.html',
  styleUrls: ['./lorem.component.css']
})
export class LoremComponent implements OnInit {

  public seratKalatidha =
  [
    [
        'Mangkya darajating praja kawuryan wus sunya-ruri rurah pangrehing ukara karana tanpa palupi.',
        'Ponang parameng-kawi kawileting tyas malatkung kongas kasudranira tidhem tandhaning dumadi.',
        'Hardayengrat dening karoban rubeda ',
    ],
    [
        'Ratune ratu utama patihe patih linuwih pra nayaka tyas raharja panekare becik-becik parandene tan dadi paliyasing kalabendu.',
        'Malah sangkin andadra rubeda kang ngreribedi.',
        'Beda-beda hardane wong sanagara '
    ],
    [
        'Katatangi tangisira sira sang parameng kawi kawileting tyas duhtita kataman ing reh wirangi dening upaya sandi',
        'sumaruna anarawang panglipur manuhara met pamrih melik pakolih',
        'temah suh-ha ing karsa tanpa weweka.'
    ],
    [
        'Dhasar karoban pawarta babaratan ujar lamis pinudya dadya pangarsa wekasan malah kawuri.',
        'Yen pinikir sayekti pedah apa aneng ngayun andhedher kaluputan siniraman banyu lali.',
        'Lamun tuwuh dadi kekembanging beka.'
    ],
    [
        'Ujaring Panitisastra awawarah asung peling ing jaman keneng musibat wong ambek jatmika kontit.',
        'Mangkono yen niteni.',
        'Pedah apa amituhu pawarta lalawora mundhak angroronta ati. Angur-baya ngiketa cariteng kuna.'
    ],
    [
        'Keni kinarya darsana palimbang ala lan becik.',
        'Sayekti akeh kewala lalakon kang dadi tamsil masalahing ngaurip',
        'wahanira tinemu temahan anarima mupus papasthening takdir puluh-puluh anglakoni kaelokan.'
    ]
  ];

  constructor() { }

  ngOnInit() {
  }

}
