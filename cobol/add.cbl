           IDENTIFICATION DIVISION.
           PROGRAM-ID. CALC.
           DATA DIVISION.
           WORKING-STORAGE SECTION.
           01 A PIC 9(4).
           01 B PIC 9(4).
           01 RESULT PIC S9(6).
           PROCEDURE DIVISION.
           MAIN-PROCEDURE.
            ACCEPT A.
            ACCEPT B.
            ADD A TO B GIVING RESULT.
      *     DISPLAY FUNCTION TRIM(RESULT).
            DISPLAY RESULT.
            STOP RUN.
       END PROGRAM CALC.
      