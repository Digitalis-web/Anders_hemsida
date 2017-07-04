<div style="display:none" class="offert">
    <div class="offert_container">
    <img class = "offert_close" src="img/cross.svg" alt="close">

        <form action="" method="post" class="offert_form col-md-6 col-xs-12" content="offert_form">

            <p class="col-xs-offset-2 col-xs-4">Namn</p>
            <input type="text" name="name" id="name" placeholder="Namn" class="col-xs-8 col-xs-offset-2">

            <p class="col-xs-offset-2 col-xs-4">Telefonnummer</p>
            <input type="text" name="phone" id="phone" placeholder="Telefonnummer" class="col-xs-8 col-xs-offset-2">

            <p class="col-xs-offset-2 col-xs-4">E-Mail</p>
            <input type="email" name="email" id="email" placeholder="E-Mail" class="col-xs-8 col-xs-offset-2">

            <p class="col-xs-offset-2 col-xs-4">Message</p>
            <textarea type="text" name="message" id="message" placeholder="Optional message" class="col-xs-8 col-xs-offset-2"></textarea>
            <button type="button" class="offert_send col-xs-4 col-xs-offset-4">Send</button>
        </form>

        <div class="offert_product col-md-6 hidden-xs">
            <?php
            ?>

            <!---
            <div class="offert_product_sak col-xs-10 col-xs-offset-1">
                <img src="img/cross.svg" alt="">
                <div class="offert_product_text col-xs-6">
                    <h1>Fin ogel</h1>
                    <p>Mycket fin orgel</p>
                    <p>Antal 1</p>
                    <p>9999€</p>
                </div>

                <div class="offert_product_img col-xs-5">
                    <img src="../img/product/kyrka/example.png" alt=" product">
                </div>
            </div>
            -->

        </div>
        <div class="offert_thankyou col-xs-12">
            <h1><?php print_field("offert_thankyou");?></h1>
            <p><?php print_field("offert_thankyou_text");?></p>
            <p class = "contact"> <?php print_field("i_contact_person_number_1") ?></p>
            <p class = "contact"> <?php print_field("i_contact_person_mail_1")   ?></p>
        </div>
    </div>
</div>
