cd /workspace/PersonalWebSite ;
    echo -e "\n-----------------------------\n\nInstallazione Angular CLI ..." ;
    npm i -g @angular/cli;
    echo -e "\n-----------------------------\n\nInstallazione Nodemon ..." ;
    npm i -g nodemon ;
cd client/ ;
    echo -e "\n-----------------------------\n\n[CLIENT] Installazione CORS ..." ;
    npm i cors ;
    echo -e "\n-----------------------------\n\n[CLIENT] Installazione Bootstrap ..." ;
    npm i bootstrap ;
    echo -e "\n-----------------------------\n\n[CLIENT] Installazione Dipendenze ..." ;
    npm i ;
cd ../server ;
    echo -e "\n-----------------------------\n\n[SERVER] Installazione CORS ..." ;
    npm i cors ;
    echo -e "\n-----------------------------\n\n[SERVER] Installazione Redis ..." ;
    npm i redis ;
    npm i redis-rejson ;
    echo -e "\n-----------------------------\n\n[SERVER] Installazione Express ..." ;
    npm i express ;
    echo -e "\n-----------------------------\n\n[SERVER] Installazione Dipendenze ..." ;
    npm i ;
echo -e "[FINITO]"