import multer from "multer";
import util from "util";
import aws from 'aws-sdk';
import multerS3 from 'multer-s3';


const photoStorage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './public/');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });

const photoFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const cvStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const cvFilter = (req, file, cb) => {
  if(file.originalname.match(/\.(pdf|doc|docx|jpg|png)$/)){
      cb(null, true);
  } else {
      cb(null, false);
  }
};

//s3 aws
const s3 = new aws.S3();

aws.config.update({
    secretAccessKey: process.env.S3_ACCESS_SECRET,
    accessKeyId: process.env.S3_ACCESS_KEY,
    region: 'us-east-2',
});


const s3delete = function (params) {
  return new Promise((resolve, reject) => {
      s3.createBucket({
          Bucket: 'mercsolutions-files'       /* Put your bucket name */
      }, function () {
          s3.deleteObject(params, function (err, data) {
              if (err) console.log(err);
              else{
                console.log( "Successfully deleted file from bucket");
              }
                  
              console.log(data);
          });
      });
  });
};

const upload = multer({
  fileFilter,
  storage: multerS3({
      acl: 'public-read',
      s3, 
      bucket: 'mercsolutions-files',
      metadata: (req, file, cb)=>{
          cb(null, {fieldName: "Testing_metadata"});
      },
      key: (req, file, cb)=>{
          cb(null, file.originalname);
      },
  }),
}).single('file');




const fileFilter = (req, file, cb)=>{
  if(file.mimetype === 'image/jpeg' || file.mymetype === 'image/png' || file.mimetype === 'application/pdf'){
      cb(null, true);
  }else{
      cb(new Error("Archivo invalido, solo png o jpg o pdf", false));
  }
};


//Para subir fotos
const uploadPhoto = multer({ storage: photoStorage, fileFilter:photoFilter }).single("fileImg");
const uploadPhotoFile=util.promisify(uploadPhoto);
//Para subir pdf o doc
const uploadcv = multer({ storage: cvStorage, fileFilter:cvFilter }).single("file");
const uploadcvFile=util.promisify(uploadcv);
module.exports={
  uploadPhotoFile:uploadPhotoFile,
  uploadcvFile: upload,
  borrar:s3delete
};
