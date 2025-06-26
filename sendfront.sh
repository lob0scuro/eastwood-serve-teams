echo "switching to master branch"
git checkout master

echo "bundling files"
npm run build

echo "deploying files to server..."
scp -r dist/* cameron@104.200.20.211:/var/www/epcteams.com/

echo "done!"