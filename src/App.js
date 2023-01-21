import { useState } from 'react';

import emailjs from 'emailjs-com';

export default function App() {

  const [data, setdata] = useState({});

 function send(){
  if (!data.name || !data.email || !data.phone || !data.mensagem){
alert("Obrigatório preencher todos os campos!!")
  }
 
  emailjs.init('3ZdxmHkee5HowZBYW');
  emailjs.send('service_gcrervn', 'template_yla1y47', 
            {to_email: data.email, subject: data.email, message_html: data.mensagem, phone:data.phone,from_name:data.name}, 
            '3ZdxmHkee5HowZBYW'
        )
        .then(res => console.log(alert("Email enviado com sucesso!")))
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
 }

  function handleForm({ value, name }) {
     
    setdata({
        ...data,
        [name]: value,
    });
};
console.log(data)
  return (
    <>

      <section class="contact-w3ls">
        
        <div class="container">
          <div class="wthree-heading">
            <h2 class="w3l-titles">Contate-Nos</h2>
            <p class="quia">"Deseja conhecer as vantagens da Move Express?<br /> Informe seus dados e entraremos em contato."</p>
          </div>
          <div class="con-top">
            <div class="col-lg-12 col-md-6 col-sm-6 contact-w3-agile2" data-aos="flip-left">
              <div class="contact-agileits">
                <form id="main-contact-form-" name="contact=form" method="post" action="contato/enviaEmail.php" class="volunter-form">
                  <div class="control-group form-group">
                    <div class="controls">
                      <label class="contact-p1">Nome:</label>
                      <input type="text" class="form-control" name="name" id="name" Placeholder="Informe seu nome " required="" onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })}/>
                      <p class="help-block"></p>
                    </div>
                  </div>

                  <div class="control-group form-group">
                    <div class="controls">
                      <label class="contact-p1">Email:</label>
                      <input type="email" class="form-control" name="email" id="email" Placeholder="Informe seu email " required="" onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })}/>
                      <p class="help-block"></p>
                    </div>
                  </div>

                  <div class="control-group form-group">
                    <div class="controls">
                      <label class="contact-p1">Telefone:</label>
                      <input type="tel" class="form-control" name="phone" id="phone" Placeholder="Informe seu telefone " required="" onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })}/>
                      <p class="help-block"></p>
                    </div>
                  </div>


                  <div class="control-group form-group">
                    <div class="controls">
                      <label class="contact-p1">Mensagem:</label>
                      <textarea class="form-control" name="mensagem" id="mensagem" Placeholder="Escreva sua mensagem" rows="4" cols="50" onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })}></textarea>
                      <p class="help-block"></p>
                    </div>
                  </div>
               
       
                
                </form>
                <form id="main-contact-form-" name="contact=form" method="post" action="contato/enviaEmail.php" class="volunter-form"></form>
                <button onClick={()=>{send()}} type="submit"  class="btn btn-white py-3 px-5" >Enviar mensagem</button>
            
                <div id="success"></div>
            
              </div>
            </div>
          </div>
        </div>
      </section>


      <div class="footer" id="faleConosco">
        <div class="container">
          <div class="agileits_w3layouts_footer_grids">
            <div class="col-md-4 agileits_w3layouts_footer_grid">
              <h3>Ligue agora</h3>
              <ul>
                <li><span>Celular&nbsp;&nbsp;&nbsp;&nbsp;:</span> +55 41 9 9675.9390</li>
                <li><span>Telefone :</span> +55 41 9 9736.7299</li>
                <li><span>Telefone :</span> +55 41 9 3076.9671</li>

              </ul>
            </div>
            <div class="col-md-4 agileits_w3layouts_footer_grid">
              <h3>Nosso endereço</h3>
              <p>Rua Anne Frank, 493<i>Curitiba - Paraná</i></p>
            </div>
            <div class="col-md-4 agileits_w3layouts_footer_grid">
              <h3>Entre em contato</h3>
              <ul>
                <li><span>Email :</span> <a href="mailto:contato@moveexpress.com.br">contato@moveexpress.com.br</a></li>
              </ul>
            </div>
            <div class="clearfix"> </div>
          </div>
          <div class="w3_agileits_footer_grids">
            <div class="col-md-4 w3_agileits_footer_grid text-justify">
              <p>"Custos reduzidos e transparência. O controle em tempo real das nossas entregas é a garantia de
                que tudo está sendo feito de forma transparente e segura.”</p>
            </div>
            <div class="col-md-4 w3_agileits_footer_grid">
              <h3>Horário de trabalho</h3>
              <ul>
                <li><span>Seg - Sáb: </span> 8:00 as 18:00</li>
              </ul>
            </div>
            <div class="col-md-4 w3_agileits_footer_grid">
              <h3>Inscreva-se agora</h3>
              <form action="#" method="post">
                <input type="email" name="Email" placeholder="Email" required="" />
                <input type="submit" value="enviar " />
              </form>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
      </div>

      <div class="wthree_copy_right copyright">
        <div class="container">
          <p>Copyright © MoveExpress 2020 | <a href="http://www.nc2web.com.br/">NC2 Web</a></p>
        </div>
      </div>

      <div class="whatsapp-fixo">
        <a href="http://linkwhatsapp.com/MOVE-EXPRESS" target="_blank">
          <img src="images/icons-whats.png" alt="Fale Conosco pelo WhatsApp" />
        </a>
      </div>

      <div class="chevron-fixo">
        <a href="#banner" class="page-scroll"><i class="fa fa-chevron-up"></i></a>
      </div>

    </>
  )
}
